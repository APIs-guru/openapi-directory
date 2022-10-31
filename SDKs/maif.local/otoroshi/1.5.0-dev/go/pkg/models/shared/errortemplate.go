package shared



type ErrorTemplate struct {
    Messages map[string]string `json:"messages"`
    ServiceID string `json:"serviceId"`
    Template40x string `json:"template40x"`
    Template50x string `json:"template50x"`
    TemplateBuild string `json:"templateBuild"`
    TemplateMaintenance string `json:"templateMaintenance"`
    
}

