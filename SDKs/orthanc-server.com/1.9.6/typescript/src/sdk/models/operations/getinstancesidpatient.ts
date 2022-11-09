import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdPatientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdPatientQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetInstancesIdPatientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdPatientPathParams;

  @Metadata()
  queryParams: GetInstancesIdPatientQueryParams;
}


export class GetInstancesIdPatientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdPatient200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
