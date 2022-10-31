package shared




type ListFindingsResultStateChangeEnum string

const (
    ListFindingsResultStateChangeEnumUnused ListFindingsResultStateChangeEnum = "UNUSED"
ListFindingsResultStateChangeEnumChanged ListFindingsResultStateChangeEnum = "CHANGED"
ListFindingsResultStateChangeEnumUnchanged ListFindingsResultStateChangeEnum = "UNCHANGED"
ListFindingsResultStateChangeEnumAdded ListFindingsResultStateChangeEnum = "ADDED"
ListFindingsResultStateChangeEnumRemoved ListFindingsResultStateChangeEnum = "REMOVED"
)


type ListFindingsResult struct {
    Finding *Finding `json:"finding,omitempty"`
    Resource *Resource `json:"resource,omitempty"`
    StateChange *ListFindingsResultStateChangeEnum `json:"stateChange,omitempty"`
    
}

