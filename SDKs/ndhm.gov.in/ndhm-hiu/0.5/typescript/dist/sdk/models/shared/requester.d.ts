import { SpeakeasyBase } from "../../../internal/utils";
export declare class RequesterIdentifier extends SpeakeasyBase {
    system?: string;
    type: string;
    value: string;
}
export declare class Requester extends SpeakeasyBase {
    identifier?: RequesterIdentifier;
    name: string;
}
