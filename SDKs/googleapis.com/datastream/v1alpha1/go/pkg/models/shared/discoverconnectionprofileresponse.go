package shared



type DiscoverConnectionProfileResponse struct {
    MysqlRdbms *MysqlRdbms `json:"mysqlRdbms,omitempty"`
    OracleRdbms *OracleRdbms `json:"oracleRdbms,omitempty"`
    
}

