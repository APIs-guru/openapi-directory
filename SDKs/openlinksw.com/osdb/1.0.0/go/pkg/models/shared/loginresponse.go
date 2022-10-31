package shared



type LoginResponseResponse struct {
    User string `json:"user"`
    
}


type LoginResponseStatusEnum string

const (
    LoginResponseStatusEnumSuccess LoginResponseStatusEnum = "success"
)


type LoginResponse struct {
    API string `json:"api"`
    Method string `json:"method"`
    Response LoginResponseResponse `json:"response"`
    Status LoginResponseStatusEnum `json:"status"`
    
}

