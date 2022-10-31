package shared

type SymptomSymptomTypeEnum string

const (
	SymptomSymptomTypeEnumSymptomTypeUnspecified SymptomSymptomTypeEnum = "SYMPTOM_TYPE_UNSPECIFIED"
	SymptomSymptomTypeEnumLowMemory              SymptomSymptomTypeEnum = "LOW_MEMORY"
	SymptomSymptomTypeEnumOutOfMemory            SymptomSymptomTypeEnum = "OUT_OF_MEMORY"
	SymptomSymptomTypeEnumExecuteTimedOut        SymptomSymptomTypeEnum = "EXECUTE_TIMED_OUT"
	SymptomSymptomTypeEnumMeshBuildFail          SymptomSymptomTypeEnum = "MESH_BUILD_FAIL"
	SymptomSymptomTypeEnumHbmOutOfMemory         SymptomSymptomTypeEnum = "HBM_OUT_OF_MEMORY"
	SymptomSymptomTypeEnumProjectAbuse           SymptomSymptomTypeEnum = "PROJECT_ABUSE"
)

type Symptom struct {
	CreateTime  *string                 `json:"createTime,omitempty"`
	Details     *string                 `json:"details,omitempty"`
	SymptomType *SymptomSymptomTypeEnum `json:"symptomType,omitempty"`
	WorkerID    *string                 `json:"workerId,omitempty"`
}
