package shared




type ActionResponseTypeEnum string

const (
    ActionResponseTypeEnumTypeUnspecified ActionResponseTypeEnum = "TYPE_UNSPECIFIED"
ActionResponseTypeEnumNewMessage ActionResponseTypeEnum = "NEW_MESSAGE"
ActionResponseTypeEnumUpdateMessage ActionResponseTypeEnum = "UPDATE_MESSAGE"
ActionResponseTypeEnumUpdateUserMessageCards ActionResponseTypeEnum = "UPDATE_USER_MESSAGE_CARDS"
ActionResponseTypeEnumRequestConfig ActionResponseTypeEnum = "REQUEST_CONFIG"
ActionResponseTypeEnumDialog ActionResponseTypeEnum = "DIALOG"
)


type ActionResponse struct {
    DialogAction *DialogAction `json:"dialogAction,omitempty"`
    Type *ActionResponseTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

