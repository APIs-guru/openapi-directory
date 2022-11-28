import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeField } from "./creativefield";
/**
 * Creative Field List Response
**/
export declare class CreativeFieldsListResponse extends SpeakeasyBase {
    creativeFields?: CreativeField[];
    kind?: string;
    nextPageToken?: string;
}
