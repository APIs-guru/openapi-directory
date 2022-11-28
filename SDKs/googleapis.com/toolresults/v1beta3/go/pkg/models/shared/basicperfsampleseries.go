package shared

type BasicPerfSampleSeriesPerfMetricTypeEnum string

const (
	BasicPerfSampleSeriesPerfMetricTypeEnumPerfMetricTypeUnspecified BasicPerfSampleSeriesPerfMetricTypeEnum = "perfMetricTypeUnspecified"
	BasicPerfSampleSeriesPerfMetricTypeEnumMemory                    BasicPerfSampleSeriesPerfMetricTypeEnum = "memory"
	BasicPerfSampleSeriesPerfMetricTypeEnumCPU                       BasicPerfSampleSeriesPerfMetricTypeEnum = "cpu"
	BasicPerfSampleSeriesPerfMetricTypeEnumNetwork                   BasicPerfSampleSeriesPerfMetricTypeEnum = "network"
	BasicPerfSampleSeriesPerfMetricTypeEnumGraphics                  BasicPerfSampleSeriesPerfMetricTypeEnum = "graphics"
)

type BasicPerfSampleSeriesPerfUnitEnum string

const (
	BasicPerfSampleSeriesPerfUnitEnumPerfUnitUnspecified BasicPerfSampleSeriesPerfUnitEnum = "perfUnitUnspecified"
	BasicPerfSampleSeriesPerfUnitEnumKibibyte            BasicPerfSampleSeriesPerfUnitEnum = "kibibyte"
	BasicPerfSampleSeriesPerfUnitEnumPercent             BasicPerfSampleSeriesPerfUnitEnum = "percent"
	BasicPerfSampleSeriesPerfUnitEnumBytesPerSecond      BasicPerfSampleSeriesPerfUnitEnum = "bytesPerSecond"
	BasicPerfSampleSeriesPerfUnitEnumFramesPerSecond     BasicPerfSampleSeriesPerfUnitEnum = "framesPerSecond"
	BasicPerfSampleSeriesPerfUnitEnumByte                BasicPerfSampleSeriesPerfUnitEnum = "byte"
)

type BasicPerfSampleSeriesSampleSeriesLabelEnum string

const (
	BasicPerfSampleSeriesSampleSeriesLabelEnumSampleSeriesTypeUnspecified BasicPerfSampleSeriesSampleSeriesLabelEnum = "sampleSeriesTypeUnspecified"
	BasicPerfSampleSeriesSampleSeriesLabelEnumMemoryRssPrivate            BasicPerfSampleSeriesSampleSeriesLabelEnum = "memoryRssPrivate"
	BasicPerfSampleSeriesSampleSeriesLabelEnumMemoryRssShared             BasicPerfSampleSeriesSampleSeriesLabelEnum = "memoryRssShared"
	BasicPerfSampleSeriesSampleSeriesLabelEnumMemoryRssTotal              BasicPerfSampleSeriesSampleSeriesLabelEnum = "memoryRssTotal"
	BasicPerfSampleSeriesSampleSeriesLabelEnumMemoryTotal                 BasicPerfSampleSeriesSampleSeriesLabelEnum = "memoryTotal"
	BasicPerfSampleSeriesSampleSeriesLabelEnumCPUUser                     BasicPerfSampleSeriesSampleSeriesLabelEnum = "cpuUser"
	BasicPerfSampleSeriesSampleSeriesLabelEnumCPUKernel                   BasicPerfSampleSeriesSampleSeriesLabelEnum = "cpuKernel"
	BasicPerfSampleSeriesSampleSeriesLabelEnumCPUTotal                    BasicPerfSampleSeriesSampleSeriesLabelEnum = "cpuTotal"
	BasicPerfSampleSeriesSampleSeriesLabelEnumNtBytesTransferred          BasicPerfSampleSeriesSampleSeriesLabelEnum = "ntBytesTransferred"
	BasicPerfSampleSeriesSampleSeriesLabelEnumNtBytesReceived             BasicPerfSampleSeriesSampleSeriesLabelEnum = "ntBytesReceived"
	BasicPerfSampleSeriesSampleSeriesLabelEnumNetworkSent                 BasicPerfSampleSeriesSampleSeriesLabelEnum = "networkSent"
	BasicPerfSampleSeriesSampleSeriesLabelEnumNetworkReceived             BasicPerfSampleSeriesSampleSeriesLabelEnum = "networkReceived"
	BasicPerfSampleSeriesSampleSeriesLabelEnumGraphicsFrameRate           BasicPerfSampleSeriesSampleSeriesLabelEnum = "graphicsFrameRate"
)

// BasicPerfSampleSeries
// Encapsulates the metadata for basic sample series represented by a line chart
type BasicPerfSampleSeries struct {
	PerfMetricType    *BasicPerfSampleSeriesPerfMetricTypeEnum    `json:"perfMetricType,omitempty"`
	PerfUnit          *BasicPerfSampleSeriesPerfUnitEnum          `json:"perfUnit,omitempty"`
	SampleSeriesLabel *BasicPerfSampleSeriesSampleSeriesLabelEnum `json:"sampleSeriesLabel,omitempty"`
}
