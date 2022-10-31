package shared



type AccessTokenInfoResponse struct {
    AppID int32 `json:"app_id"`
    ExpiresIn int32 `json:"expires_in"`
    HubDomain *string `json:"hub_domain,omitempty"`
    HubID int32 `json:"hub_id"`
    ScopeToScopeGroupPks []int32 `json:"scope_to_scope_group_pks"`
    Scopes []string `json:"scopes"`
    Token string `json:"token"`
    TokenType string `json:"token_type"`
    TrialScopeToScopeGroupPks []int32 `json:"trial_scope_to_scope_group_pks"`
    TrialScopes []string `json:"trial_scopes"`
    User *string `json:"user,omitempty"`
    UserID int32 `json:"user_id"`
    
}

