import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EntryLinkMediaEnum {
    ApplicationFhirPlusJson = "application/fhir+json"
}
export declare class EntryLink extends SpeakeasyBase {
    careContextReference: string;
    checksum: string;
    link: string;
    media: EntryLinkMediaEnum;
}
