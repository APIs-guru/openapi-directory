import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VolumeseriesinfoVolumeSeriesIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueDisplayNumber" })
  issueDisplayNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=issueOrderNumber" })
  issueOrderNumber?: number;
}


export class VolumeseriesinfoVolumeSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issue", elemType: VolumeseriesinfoVolumeSeriesIssue })
  issue?: VolumeseriesinfoVolumeSeriesIssue[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=seriesBookType" })
  seriesBookType?: string;

  @SpeakeasyMetadata({ data: "json, name=seriesId" })
  seriesId?: string;
}


export class Volumeseriesinfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookDisplayNumber" })
  bookDisplayNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=shortSeriesBookTitle" })
  shortSeriesBookTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeSeries", elemType: VolumeseriesinfoVolumeSeries })
  volumeSeries?: VolumeseriesinfoVolumeSeries[];
}
