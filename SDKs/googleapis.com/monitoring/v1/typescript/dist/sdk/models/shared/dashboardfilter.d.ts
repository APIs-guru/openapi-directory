import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DashboardFilterFilterTypeEnum {
    FilterTypeUnspecified = "FILTER_TYPE_UNSPECIFIED",
    ResourceLabel = "RESOURCE_LABEL",
    MetricLabel = "METRIC_LABEL",
    UserMetadataLabel = "USER_METADATA_LABEL",
    SystemMetadataLabel = "SYSTEM_METADATA_LABEL",
    Group = "GROUP"
}
/**
 * A filter to reduce the amount of data charted in relevant widgets.
**/
export declare class DashboardFilter extends SpeakeasyBase {
    filterType?: DashboardFilterFilterTypeEnum;
    labelKey?: string;
    stringValue?: string;
    templateVariable?: string;
}
