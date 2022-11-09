import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum InstanceMessageCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    ZoneDistributionUnbalanced = "ZONE_DISTRIBUTION_UNBALANCED"
}
export declare class InstanceMessage extends SpeakeasyBase {
    code?: InstanceMessageCodeEnum;
    message?: string;
}
