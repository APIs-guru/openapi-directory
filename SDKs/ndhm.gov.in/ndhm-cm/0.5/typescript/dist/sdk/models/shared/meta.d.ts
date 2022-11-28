import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetaCommunicationMediumEnum {
    Mobile = "MOBILE",
    Email = "EMAIL"
}
export declare class Meta extends SpeakeasyBase {
    communicationExpiry?: string;
    communicationHint?: string;
    communicationMedium: MetaCommunicationMediumEnum;
}
