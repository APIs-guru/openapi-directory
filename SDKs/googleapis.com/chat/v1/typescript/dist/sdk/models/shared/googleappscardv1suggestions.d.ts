import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1SuggestionItem } from "./googleappscardv1suggestionitem";
/**
 * Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing "Jav", the list of suggestions filters to show just Java and JavaScript. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter "javascript" and others "java script". Suggesting "JavaScript" can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it is set to `MULTIPLE_LINE`.
**/
export declare class GoogleAppsCardV1Suggestions extends SpeakeasyBase {
    items?: GoogleAppsCardV1SuggestionItem[];
}
