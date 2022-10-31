package operations



type UpdateApplicationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateApplicationRequest struct {
    PathParams UpdateApplicationPathParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksInboundURL struct {
    Address *string `json:"address,omitempty"`
    HTTPMethod *string `json:"http_method,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksStatusURL struct {
    Address *string `json:"address,omitempty"`
    HTTPMethod *string `json:"http_method,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooks struct {
    InboundURL *UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksInboundURL `json:"inbound_url,omitempty"`
    StatusURL *UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooksStatusURL `json:"status_url,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesMessages struct {
    Webhooks *UpdateApplication200ApplicationJSONCapabilitiesMessagesWebhooks `json:"webhooks,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooksEventURL struct {
    Address *string `json:"address,omitempty"`
    HTTPMethod *string `json:"http_method,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooks struct {
    EventURL *UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooksEventURL `json:"event_url,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesRtc struct {
    Webhooks *UpdateApplication200ApplicationJSONCapabilitiesRtcWebhooks `json:"webhooks,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL struct {
    Address *string `json:"address,omitempty"`
    ConnectionTimeout *int64 `json:"connection_timeout,omitempty"`
    HTTPMethod *string `json:"http_method,omitempty"`
    SocketTimeout *int64 `json:"socket_timeout,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksEventURL struct {
    Address *string `json:"address,omitempty"`
    ConnectionTimeout *int64 `json:"connection_timeout,omitempty"`
    HTTPMethod *string `json:"http_method,omitempty"`
    SocketTimeout *int64 `json:"socket_timeout,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL struct {
    Address *string `json:"address,omitempty"`
    ConnectionTimeout *int64 `json:"connection_timeout,omitempty"`
    HTTPMethod *string `json:"http_method,omitempty"`
    SocketTimeout *int64 `json:"socket_timeout,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooks struct {
    AnswerURL *UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksAnswerURL `json:"answer_url,omitempty"`
    EventURL *UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksEventURL `json:"event_url,omitempty"`
    FallbackAnswerURL *UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooksFallbackAnswerURL `json:"fallback_answer_url,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilitiesVoice struct {
    Webhooks *UpdateApplication200ApplicationJSONCapabilitiesVoiceWebhooks `json:"webhooks,omitempty"`
    
}

type UpdateApplication200ApplicationJSONCapabilities struct {
    Messages *UpdateApplication200ApplicationJSONCapabilitiesMessages `json:"messages,omitempty"`
    Rtc *UpdateApplication200ApplicationJSONCapabilitiesRtc `json:"rtc,omitempty"`
    Vbc map[string]interface{} `json:"vbc,omitempty"`
    Voice *UpdateApplication200ApplicationJSONCapabilitiesVoice `json:"voice,omitempty"`
    
}

type UpdateApplication200ApplicationJSONKeys struct {
    PrivateKey *string `json:"private_key,omitempty"`
    PublicKey *string `json:"public_key,omitempty"`
    
}

type UpdateApplication200ApplicationJSONPrivacy struct {
    ImproveAi *bool `json:"improve_ai,omitempty"`
    
}

type UpdateApplication200ApplicationJSON struct {
    Capabilities *UpdateApplication200ApplicationJSONCapabilities `json:"capabilities,omitempty"`
    ID *string `json:"id,omitempty"`
    Keys *UpdateApplication200ApplicationJSONKeys `json:"keys,omitempty"`
    Name *string `json:"name,omitempty"`
    Privacy *UpdateApplication200ApplicationJSONPrivacy `json:"privacy,omitempty"`
    
}

type UpdateApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateApplication200ApplicationJSONObject *UpdateApplication200ApplicationJSON 
    UpdateApplication400ApplicationJSONAny *interface{} 
    UpdateApplication401ApplicationJSONAny *interface{} 
    UpdateApplication404ApplicationJSONAny *interface{} 
    UpdateApplication405ApplicationJSONAny *interface{} 
    UpdateApplication406ApplicationJSONAny *interface{} 
    UpdateApplication415ApplicationJSONAny *interface{} 
    
}

