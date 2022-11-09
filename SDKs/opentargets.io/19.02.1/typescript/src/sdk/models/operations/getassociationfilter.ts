import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAssociationFilterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=datasource" })
  datasource?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=datastructure" })
  datastructure?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=datatype" })
  datatype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direct" })
  direct?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disease" })
  disease?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=scorevalue_types" })
  scorevalueTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target" })
  target?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_class" })
  targetClass?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=therapeutic_area" })
  therapeuticArea?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uniprotkw" })
  uniprotkw?: string;
}


export class GetAssociationFilterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociationFilterQueryParams;
}


export class GetAssociationFilterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
