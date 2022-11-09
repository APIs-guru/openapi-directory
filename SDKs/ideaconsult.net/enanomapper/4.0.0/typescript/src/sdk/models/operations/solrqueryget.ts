import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SolrqueryGetWtEnum {
    Json = "json"
,    Xml = "xml"
,    Csv = "csv"
}


export class SolrqueryGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fl" })
  fl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fq" })
  fq?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wt" })
  wt?: SolrqueryGetWtEnum;
}


export class SolrqueryGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SolrqueryGetQueryParams;
}


export class SolrqueryGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  solrResponse?: shared.SolrResponse;

  @Metadata()
  statusCode: number;
}
