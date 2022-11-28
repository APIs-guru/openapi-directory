import { SpeakeasyBase } from "../../../internal/utils";
export declare class VolumeseriesinfoVolumeSeriesIssue extends SpeakeasyBase {
    issueDisplayNumber?: string;
    issueOrderNumber?: number;
}
export declare class VolumeseriesinfoVolumeSeries extends SpeakeasyBase {
    issue?: VolumeseriesinfoVolumeSeriesIssue[];
    orderNumber?: number;
    seriesBookType?: string;
    seriesId?: string;
}
export declare class Volumeseriesinfo extends SpeakeasyBase {
    bookDisplayNumber?: string;
    kind?: string;
    shortSeriesBookTitle?: string;
    volumeSeries?: VolumeseriesinfoVolumeSeries[];
}
