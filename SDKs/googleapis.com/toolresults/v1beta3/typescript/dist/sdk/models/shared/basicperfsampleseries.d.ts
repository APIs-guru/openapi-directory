import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BasicPerfSampleSeriesPerfMetricTypeEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified",
    Memory = "memory",
    Cpu = "cpu",
    Network = "network",
    Graphics = "graphics"
}
export declare enum BasicPerfSampleSeriesPerfUnitEnum {
    PerfUnitUnspecified = "perfUnitUnspecified",
    Kibibyte = "kibibyte",
    Percent = "percent",
    BytesPerSecond = "bytesPerSecond",
    FramesPerSecond = "framesPerSecond",
    Byte = "byte"
}
export declare enum BasicPerfSampleSeriesSampleSeriesLabelEnum {
    SampleSeriesTypeUnspecified = "sampleSeriesTypeUnspecified",
    MemoryRssPrivate = "memoryRssPrivate",
    MemoryRssShared = "memoryRssShared",
    MemoryRssTotal = "memoryRssTotal",
    MemoryTotal = "memoryTotal",
    CpuUser = "cpuUser",
    CpuKernel = "cpuKernel",
    CpuTotal = "cpuTotal",
    NtBytesTransferred = "ntBytesTransferred",
    NtBytesReceived = "ntBytesReceived",
    NetworkSent = "networkSent",
    NetworkReceived = "networkReceived",
    GraphicsFrameRate = "graphicsFrameRate"
}
/**
 * Encapsulates the metadata for basic sample series represented by a line chart
**/
export declare class BasicPerfSampleSeries extends SpeakeasyBase {
    perfMetricType?: BasicPerfSampleSeriesPerfMetricTypeEnum;
    perfUnit?: BasicPerfSampleSeriesPerfUnitEnum;
    sampleSeriesLabel?: BasicPerfSampleSeriesSampleSeriesLabelEnum;
}
