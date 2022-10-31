package shared



type AccountSettingsRequest struct {
    DrCallBackURL *string `form:"name=drCallBackUrl"`
    MoCallBackURL *string `form:"name=moCallBackUrl"`
    
}

