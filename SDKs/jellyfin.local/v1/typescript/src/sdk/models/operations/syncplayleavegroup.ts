import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayLeaveGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayLeaveGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: SyncPlayLeaveGroupSecurity;
}


export class SyncPlayLeaveGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
