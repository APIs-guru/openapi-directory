import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EntryContentMediaEnum {
    ApplicationFhirPlusJson = "application/fhir+json"
}
export declare class EntryContent extends SpeakeasyBase {
    careContextReference: string;
    checksum: string;
    content: string;
    media: EntryContentMediaEnum;
}
