import { SpeakeasyBase } from "../../../internal/utils";
import { ObReadDataConsentResponse1 } from "./obreaddataconsentresponse1";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class ObReadConsentResponse1 extends SpeakeasyBase {
    data: ObReadDataConsentResponse1;
    links: Links;
    meta: Meta;
    risk: Map<string, any>;
}
