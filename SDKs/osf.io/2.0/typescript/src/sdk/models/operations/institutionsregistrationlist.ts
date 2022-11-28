import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InstitutionsRegistrationListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=institution_id" })
  institutionId: string;
}


export class InstitutionsRegistrationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InstitutionsRegistrationListPathParams;
}


export class InstitutionsRegistrationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
