import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkerArchitectureNameWorkerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=worker_id" })
  workerId: string;
}


export class GetWorkerArchitectureNameWorkerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetWorkerArchitectureNameWorkerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkerArchitectureNameWorkerIdPathParams;

  @SpeakeasyMetadata()
  security: GetWorkerArchitectureNameWorkerIdSecurity;
}


export class GetWorkerArchitectureNameWorkerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
