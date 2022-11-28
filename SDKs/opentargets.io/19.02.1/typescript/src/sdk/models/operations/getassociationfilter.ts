import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAssociationFilterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datasource" })
  datasource?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datastructure" })
  datastructure?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=datatype" })
  datatype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direct" })
  direct?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disease" })
  disease?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets" })
  facets?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pathway" })
  pathway?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scorevalue_max" })
  scorevalueMax?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scorevalue_min" })
  scorevalueMin?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scorevalue_types" })
  scorevalueTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_class" })
  targetClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=therapeutic_area" })
  therapeuticArea?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uniprotkw" })
  uniprotkw?: string;
}


export class GetAssociationFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociationFilterQueryParams;
}


export class GetAssociationFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
