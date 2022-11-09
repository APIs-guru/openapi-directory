import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEvidenceFilterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=data source" })
  dataSource?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=datastructure" })
  datastructure?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=datatype" })
  datatype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disease" })
  disease?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pathway" })
  pathway?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scorevalue_max" })
  scorevalueMax?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scorevalue_min" })
  scorevalueMin?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target" })
  target?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uniprotkw" })
  uniprotkw?: string;
}


export class GetEvidenceFilterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEvidenceFilterQueryParams;
}


export class GetEvidenceFilterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
