import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDataMapping } from "./userdatamapping";



export class ListUserDataMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userDataMappings", elemType: UserDataMapping })
  userDataMappings?: UserDataMapping[];
}
