import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { From } from "./from";
import { To } from "./to";
export declare class GetCallResponseLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetCallResponseLinks extends SpeakeasyBase {
    self?: GetCallResponseLinksSelf;
}
export declare class GetCallResponse extends SpeakeasyBase {
    links?: GetCallResponseLinks;
    conversationUuid?: string;
    direction?: DirectionEnum;
    duration?: string;
    endTime?: string;
    from?: From;
    network?: string;
    price?: string;
    rate?: string;
    startTime?: string;
    status?: string;
    to?: To;
    uuid?: string;
}
