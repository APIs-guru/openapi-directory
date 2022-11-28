import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayGetGroupsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayGetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: SyncPlayGetGroupsSecurity;
}


export class SyncPlayGetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupInfoDto })
  groupInfoDtos?: shared.GroupInfoDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
