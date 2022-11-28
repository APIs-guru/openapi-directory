package shared

type ServiceMeshAnalysisMessageBaseLevelEnum string

const (
	ServiceMeshAnalysisMessageBaseLevelEnumLevelUnspecified ServiceMeshAnalysisMessageBaseLevelEnum = "LEVEL_UNSPECIFIED"
	ServiceMeshAnalysisMessageBaseLevelEnumError            ServiceMeshAnalysisMessageBaseLevelEnum = "ERROR"
	ServiceMeshAnalysisMessageBaseLevelEnumWarning          ServiceMeshAnalysisMessageBaseLevelEnum = "WARNING"
	ServiceMeshAnalysisMessageBaseLevelEnumInfo             ServiceMeshAnalysisMessageBaseLevelEnum = "INFO"
)

// ServiceMeshAnalysisMessageBase
// AnalysisMessageBase describes some common information that is needed for all messages.
type ServiceMeshAnalysisMessageBase struct {
	DocumentationURL *string                                  `json:"documentationUrl,omitempty"`
	Level            *ServiceMeshAnalysisMessageBaseLevelEnum `json:"level,omitempty"`
	Type             *ServiceMeshType                         `json:"type,omitempty"`
}
