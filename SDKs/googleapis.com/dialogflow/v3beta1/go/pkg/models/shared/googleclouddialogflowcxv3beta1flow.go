package shared



type GoogleCloudDialogflowCxV3beta1Flow struct {
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EventHandlers []GoogleCloudDialogflowCxV3beta1EventHandler `json:"eventHandlers,omitempty"`
    Name *string `json:"name,omitempty"`
    NluSettings *GoogleCloudDialogflowCxV3beta1NluSettings `json:"nluSettings,omitempty"`
    TransitionRouteGroups []string `json:"transitionRouteGroups,omitempty"`
    TransitionRoutes []GoogleCloudDialogflowCxV3beta1TransitionRoute `json:"transitionRoutes,omitempty"`
    
}

