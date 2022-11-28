import { SpeakeasyBase } from "../../../internal/utils";
import { UserDataMapping } from "./userdatamapping";
export declare class ListUserDataMappingsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    userDataMappings?: UserDataMapping[];
}
