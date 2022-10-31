package shared



type ActionLabels struct {
    ActionCardContent *string `json:"actionCardContent,omitempty"`
    ActionDescription *string `json:"actionDescription,omitempty"`
    ActionName string `json:"actionName"`
    AppDisplayName *string `json:"appDisplayName,omitempty"`
    InputFieldDescriptions map[string]string `json:"inputFieldDescriptions,omitempty"`
    InputFieldLabels map[string]string `json:"inputFieldLabels,omitempty"`
    
}

