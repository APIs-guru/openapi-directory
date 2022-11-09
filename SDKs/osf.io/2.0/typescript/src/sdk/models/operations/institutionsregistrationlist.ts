import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InstitutionsRegistrationListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=institution_id" })
  institutionId: string;
}


export class InstitutionsRegistrationListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InstitutionsRegistrationListPathParams;
}


export class InstitutionsRegistrationListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
