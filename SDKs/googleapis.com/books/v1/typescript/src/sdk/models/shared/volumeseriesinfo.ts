import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VolumeseriesinfoVolumeSeriesIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=issueDisplayNumber" })
  issueDisplayNumber?: string;

  @Metadata({ data: "json, name=issueOrderNumber" })
  issueOrderNumber?: number;
}


export class VolumeseriesinfoVolumeSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=issue", elemType: shared.VolumeseriesinfoVolumeSeriesIssue })
  issue?: VolumeseriesinfoVolumeSeriesIssue[];

  @Metadata({ data: "json, name=orderNumber" })
  orderNumber?: number;

  @Metadata({ data: "json, name=seriesBookType" })
  seriesBookType?: string;

  @Metadata({ data: "json, name=seriesId" })
  seriesId?: string;
}


export class Volumeseriesinfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookDisplayNumber" })
  bookDisplayNumber?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=shortSeriesBookTitle" })
  shortSeriesBookTitle?: string;

  @Metadata({ data: "json, name=volumeSeries", elemType: shared.VolumeseriesinfoVolumeSeries })
  volumeSeries?: VolumeseriesinfoVolumeSeries[];
}
