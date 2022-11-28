import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubscriptionDefinition extends SpeakeasyBase {
    communicationMethod?: string;
    createdAt: Date;
    description: string;
    id: string;
    isActive: boolean;
    isDefault: boolean;
    isInternal: boolean;
    name: string;
    purpose?: string;
    updatedAt: Date;
}
