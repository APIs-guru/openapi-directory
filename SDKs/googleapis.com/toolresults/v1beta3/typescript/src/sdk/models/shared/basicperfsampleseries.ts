import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BasicPerfSampleSeriesPerfMetricTypeEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified"
,    Memory = "memory"
,    Cpu = "cpu"
,    Network = "network"
,    Graphics = "graphics"
}

export enum BasicPerfSampleSeriesPerfUnitEnum {
    PerfUnitUnspecified = "perfUnitUnspecified"
,    Kibibyte = "kibibyte"
,    Percent = "percent"
,    BytesPerSecond = "bytesPerSecond"
,    FramesPerSecond = "framesPerSecond"
,    Byte = "byte"
}

export enum BasicPerfSampleSeriesSampleSeriesLabelEnum {
    SampleSeriesTypeUnspecified = "sampleSeriesTypeUnspecified"
,    MemoryRssPrivate = "memoryRssPrivate"
,    MemoryRssShared = "memoryRssShared"
,    MemoryRssTotal = "memoryRssTotal"
,    MemoryTotal = "memoryTotal"
,    CpuUser = "cpuUser"
,    CpuKernel = "cpuKernel"
,    CpuTotal = "cpuTotal"
,    NtBytesTransferred = "ntBytesTransferred"
,    NtBytesReceived = "ntBytesReceived"
,    NetworkSent = "networkSent"
,    NetworkReceived = "networkReceived"
,    GraphicsFrameRate = "graphicsFrameRate"
}


// BasicPerfSampleSeries
/** 
 * Encapsulates the metadata for basic sample series represented by a line chart
**/
export class BasicPerfSampleSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=perfMetricType" })
  perfMetricType?: BasicPerfSampleSeriesPerfMetricTypeEnum;

  @Metadata({ data: "json, name=perfUnit" })
  perfUnit?: BasicPerfSampleSeriesPerfUnitEnum;

  @Metadata({ data: "json, name=sampleSeriesLabel" })
  sampleSeriesLabel?: BasicPerfSampleSeriesSampleSeriesLabelEnum;
}
