import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserDataMapping } from "./userdatamapping";


export class ListUserDataMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=userDataMappings", elemType: shared.UserDataMapping })
  userDataMappings?: UserDataMapping[];
}
