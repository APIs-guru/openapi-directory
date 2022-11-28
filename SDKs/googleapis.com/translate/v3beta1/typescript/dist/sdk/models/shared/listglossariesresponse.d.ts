import { SpeakeasyBase } from "../../../internal/utils";
import { Glossary } from "./glossary";
/**
 * Response message for ListGlossaries.
**/
export declare class ListGlossariesResponse extends SpeakeasyBase {
    glossaries?: Glossary[];
    nextPageToken?: string;
}
