import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeFieldValue } from "./creativefieldvalue";
/**
 * Creative Field Value List Response
**/
export declare class CreativeFieldValuesListResponse extends SpeakeasyBase {
    creativeFieldValues?: CreativeFieldValue[];
    kind?: string;
    nextPageToken?: string;
}
