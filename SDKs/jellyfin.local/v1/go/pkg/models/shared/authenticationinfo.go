package shared

import (
"time")

type AuthenticationInfo struct {
    AccessToken *string `json:"AccessToken,omitempty"`
    AppName *string `json:"AppName,omitempty"`
    AppVersion *string `json:"AppVersion,omitempty"`
    DateCreated *time.Time `json:"DateCreated,omitempty"`
    DateLastActivity *time.Time `json:"DateLastActivity,omitempty"`
    DateRevoked *time.Time `json:"DateRevoked,omitempty"`
    DeviceID *string `json:"DeviceId,omitempty"`
    DeviceName *string `json:"DeviceName,omitempty"`
    ID *int64 `json:"Id,omitempty"`
    IsActive *bool `json:"IsActive,omitempty"`
    UserID *string `json:"UserId,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    
}

