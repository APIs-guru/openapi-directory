import { SpeakeasyBase } from "../../../internal/utils";
import { LiaSettings } from "./liasettings";
export declare class LiasettingsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: LiaSettings[];
}
