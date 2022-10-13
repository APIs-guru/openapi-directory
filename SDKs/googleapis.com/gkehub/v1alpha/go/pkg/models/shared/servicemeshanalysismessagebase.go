package shared

type ServiceMeshAnalysisMessageBaseLevelEnum string

const (
	ServiceMeshAnalysisMessageBaseLevelEnumLevelUnspecified ServiceMeshAnalysisMessageBaseLevelEnum = "LEVEL_UNSPECIFIED"
	ServiceMeshAnalysisMessageBaseLevelEnumError            ServiceMeshAnalysisMessageBaseLevelEnum = "ERROR"
	ServiceMeshAnalysisMessageBaseLevelEnumWarning          ServiceMeshAnalysisMessageBaseLevelEnum = "WARNING"
	ServiceMeshAnalysisMessageBaseLevelEnumInfo             ServiceMeshAnalysisMessageBaseLevelEnum = "INFO"
)

type ServiceMeshAnalysisMessageBase struct {
	DocumentationURL *string                                  `json:"documentationUrl"`
	Level            *ServiceMeshAnalysisMessageBaseLevelEnum `json:"level"`
	Type             *ServiceMeshType                         `json:"type"`
}
