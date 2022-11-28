import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivationResponseMetadata extends SpeakeasyBase {
    rootContentId?: string;
}
export declare class ActivationResponse extends SpeakeasyBase {
    end?: string;
    id?: string;
    info?: string;
    learnersCount?: string;
    metadata?: ActivationResponseMetadata;
    name?: string;
    start?: string;
}
