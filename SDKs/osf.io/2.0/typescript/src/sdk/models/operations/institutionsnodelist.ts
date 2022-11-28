import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InstitutionsNodeListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=institution_id" })
  institutionId: string;
}


export class InstitutionsNodeListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InstitutionsNodeListPathParams;
}


export class InstitutionsNodeListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
