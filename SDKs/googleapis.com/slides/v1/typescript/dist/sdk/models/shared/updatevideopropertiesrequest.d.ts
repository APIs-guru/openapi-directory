import { SpeakeasyBase } from "../../../internal/utils";
import { VideoProperties } from "./videoproperties";
/**
 * Update the properties of a Video.
**/
export declare class UpdateVideoPropertiesRequest extends SpeakeasyBase {
    fields?: string;
    objectId?: string;
    videoProperties?: VideoProperties;
}
