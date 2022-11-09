import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchByIdentifierRepresentationEnum {
    All = "all"
,    Smiles = "smiles"
,    Reach = "reach"
,    Stdinchi = "stdinchi"
,    Stdinchikey = "stdinchikey"
,    Names = "names"
,    IupacName = "iupac_name"
,    Synonym = "synonym"
,    Cas = "cas"
,    Einecs = "einecs"
}

export enum SearchByIdentifierTermEnum {
    Search = "search"
,    Url = "url"
,    Inchikey = "inchikey"
}


export class SearchByIdentifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=representation" })
  representation: SearchByIdentifierRepresentationEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=term" })
  term: SearchByIdentifierTermEnum;
}


export class SearchByIdentifierQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=b64search" })
  b64search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" })
  bundleUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=casesens" })
  casesens?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sameas" })
  sameas?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class SearchByIdentifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchByIdentifierPathParams;

  @Metadata()
  queryParams: SearchByIdentifierQueryParams;
}


export class SearchByIdentifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
