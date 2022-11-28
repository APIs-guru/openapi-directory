import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchByIdentifierRepresentationEnum {
    All = "all",
    Smiles = "smiles",
    Reach = "reach",
    Stdinchi = "stdinchi",
    Stdinchikey = "stdinchikey",
    Names = "names",
    IupacName = "iupac_name",
    Synonym = "synonym",
    Cas = "cas",
    Einecs = "einecs"
}

export enum SearchByIdentifierTermEnum {
    Search = "search",
    Url = "url",
    Inchikey = "inchikey"
}


export class SearchByIdentifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" })
  db: shared.AmbitDatabaseIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=representation" })
  representation: SearchByIdentifierRepresentationEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=term" })
  term: SearchByIdentifierTermEnum;
}


export class SearchByIdentifierQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=b64search" })
  b64search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" })
  bundleUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=casesens" })
  casesens?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sameas" })
  sameas?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class SearchByIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchByIdentifierPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchByIdentifierQueryParams;
}


export class SearchByIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
