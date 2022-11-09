import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayGetGroupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayGetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  security: SyncPlayGetGroupsSecurity;
}


export class SyncPlayGetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GroupInfoDto })
  groupInfoDtos?: shared.GroupInfoDto[];

  @Metadata()
  statusCode: number;
}
